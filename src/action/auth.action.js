"use server";

import { responseStatus } from "../enum/userRoles";
import axiosInstance from "../lib/axios";
import API_URL from "../routes/api-routes";

export const userRegister = async (data) => {
  try {
    const response = await axiosInstance.post(API_URL.AUTH.REGISTER, data);
    if (response?.data?.status === responseStatus.SUCCESS) {
      return {
        status: true,
        message: response?.data?.message,
        token: response?.data?.token,
      };
    }
  } catch (error) {
    return {
      status: false,
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again.",
    };
  }
};

export const verificationEmail = async (token) => {
  try {
    const response = await axiosInstance.get(API_URL.AUTH.VERIFY_EMAIL(token));
    if (response?.data?.status === responseStatus.SUCCESS) {
      return {
        status: true,
        message: response?.data?.message,
      };
    }
  } catch (error) {
    return {
      status: false,
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again.",
    };
  }
};

export const userLogin = async (data) => {
  try {
    const response = await axiosInstance.post(API_URL.AUTH.LOGIN, data);
    if (response?.data?.status === responseStatus.SUCCESS) {
      return {
        status: true,
        message: response?.data?.message,
        data:response?.data?.user
      };
    }
  } catch (error) {
    return {
      status: false,
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again.",
    };
  }
};
