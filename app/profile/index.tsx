"use client";
import { useMe, useUpdateUser } from "@/hook/useAuth";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  const { data: me } = useMe();
  const { mutate: updateUser } = useUpdateUser();
  const { register, handleSubmit, reset } = useForm({ defaultValues: me });

  useEffect(() => {
    if (me) reset(me);
  }, [me, reset]);

  if (!me) return <div>Loading...</div>;

  const onSubmit = (data: any) => updateUser({ userId: me.id, payload: data });

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Profile</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
      >
        <input {...register("fullName")} placeholder="Full Name" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("phone")} placeholder="Phone" />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
