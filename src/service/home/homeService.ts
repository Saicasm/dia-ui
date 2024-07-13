import axiosClient from "..";
export interface CreateData {
  image: File;
  question: string;
}

// Fetch user data
export const createImage = async (imageUpload: CreateData): Promise<any> => {
  var imageFormData = new FormData();
  imageFormData.append("image", imageUpload.image);
  imageFormData.append("question", imageUpload.question);
  const response = await axiosClient.postForm(
    `/api/v1/image/vilt`,
    imageFormData
  );
  return response.data;
};
