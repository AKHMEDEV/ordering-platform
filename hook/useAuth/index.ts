import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { loginUser, logoutUser, registerUser } from "@/api/auth/indedx";
import {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "@/types/auth";
import { getMe, updateUser } from "@/api/user";
import { IUserProfile } from "@/types/profile";


export const useMe = () => {
  return useQuery<IUserProfile>({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};

export const useUpdateUser = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      payload,
    }: {
      userId: string;
      payload: Partial<IUserProfile>;
    }) => updateUser(userId, payload),
    onSuccess: (updatedUser: IUserProfile) => {
      qc.setQueryData(["me"], updatedUser);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useRegister = (onSuccessCallback?: () => void) => {
  const router = useRouter();
  const qc = useQueryClient();

  return useMutation<IRegisterResponse, any, IRegisterPayload>({
    mutationFn: registerUser,
    onSuccess: (res) => {
      toast.success("Success ✅");
      qc.setQueryData(["me"], res.user);
      onSuccessCallback?.();

      if (res.user.role !== "USER")
        router.push(`/${res.user.role.toLowerCase()}/dashboard`);
      else router.push("/");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useLogin = () => {
  const qc = useQueryClient();
  const router = useRouter();

  return useMutation<ILoginResponse, any, ILoginPayload>({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (res) => {
      toast.success("Login successful ✅");
      qc.setQueryData(["me"], res.user);

      if (res.user.role !== "USER")
        router.push(`/${res.user.role.toLowerCase()}/dashboard`);
      else router.push("/");
    },
    onError: (error: any) => {
      // Backenddan kelayotgan xabarni toast bilan chiqarish
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    },
  });
};

export const useLogout = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutUser,
    onSuccess: () => {
      toast.success("Logout successful ✅");
      qc.setQueryData(["me"], null);
      qc.removeQueries({ queryKey: ["me"] });
    },
  });
};
