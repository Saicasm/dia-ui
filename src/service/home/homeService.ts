import { CreateData } from "@/util/types";
import axiosClient from "..";
import { Models } from "@/util/enums";

// Fetch user data
export const createImage = async (imageUpload: CreateData): Promise<any> => {
  var imageFormData = new FormData();
  imageFormData.append("image", imageUpload.image);
  imageFormData.append("question", imageUpload.question);
  const response = await axiosClient.postForm(
    `/api/v1/image/${Models.VILT}`,
    imageFormData
  );
  return response.data;
};

// Fetch user data
export const getRetinaResponse = async (
  imageUpload: CreateData
): Promise<any> => {
  var imageFormData = new FormData();
  imageFormData.append("image", imageUpload.image);
  imageFormData.append("question", imageUpload.question);
  const response = await axiosClient.postForm(
    `/api/v1/image/${Models.RETINA}`,
    imageFormData
  );
  return response.data;
};
