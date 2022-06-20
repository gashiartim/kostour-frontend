import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";

export type CreateLocationFormValues = {
  name: string;
  description: string;
  whatCanYouDo: string;
  fullAddress: string;
  categories: string[];
  thumbnail?: any;
};

export const CreateLocationFormSchema = YUP.object().shape({
  name: YUP.string().required("Name is required"),
  description: YUP.string().required("Description is required"),
  whatCanYouDo: YUP.string().required("What can you do is required"),
  fullAddress: YUP.string().nullable(),
  categories: YUP.array()
    .of(
      YUP.object()
        .shape({
          id: YUP.string().required("Category id is required"),
          name: YUP.string().required("Category name is required"),
        })
        .nullable()
    )
    .nullable(),
  thumbnail: YUP.object()
    .shape({
      id: YUP.string().nullable(),
      media_id: YUP.string().nullable(),
      entity: YUP.string().nullable(),
      entity_id: YUP.string().nullable(),
      related_field: YUP.string(),
      order: YUP.string().nullable(),
      media: YUP.object().nullable(),
    })
    .nullable(),
});

export function useCreateLocationForm(
  options?: UseFormProps<CreateLocationFormValues>
) {
  return useForm<CreateLocationFormValues>({
    mode: "all",
    ...options,
    resolver: yupResolver(CreateLocationFormSchema),
  });
}

export type CreateLocationForm = ReturnType<typeof useCreateLocationForm>;
