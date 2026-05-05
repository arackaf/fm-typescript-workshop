import { useForm } from "@tanstack/react-form";
import React, { FC } from "react";

export type Artist = {
  id: string;
  name: string;
  avatar: string;
};

const defaultArtist: Artist = {
  id: "",
  name: "",
  avatar: "",
};

export const useArtistForm = (onSubmit: (value: Artist) => void) => {
  return useForm({
    defaultValues: defaultArtist,

    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });
};

export type ProductForm = ReturnType<typeof useArtistForm>;

const ArtistForm: FC = (props) => {
  const form = useForm({
    defaultValues: defaultArtist,

    onSubmit: async ({ value }) => {},
  });

  return (
    <div>
      <form onSubmit={() => {}}>
        <form.Field name="id">
          {(field) => (
            <input
              name={field.name}
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <form.Field name="name">
          {(field) => (
            <input
              name={field.name}
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <AvatarField form={form} />
      </form>
    </div>
  );
};

const AvatarField: FC<{ form: any }> = (props) => {
  const { form } = props;
  return (
    <form.Field name="avatar">
      {(field) => (
        <input
          name={field.name}
          type="text"
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
        />
      )}
    </form.Field>
  );
};
