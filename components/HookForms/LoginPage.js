import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import AppTextInput from "../Form/AppTextInput";
import AppButton from "../Form/AppButton";

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <View style={{ width: "100%", backgroundColor: "brown" }}>
        <AppTextInput
          name="name"
          placeholder="Enter name"
          control={control}
          errors={errors}
        />
      </View>
      <AppTextInput
        name="email"
        placeholder="Enter email"
        control={control}
        errors={errors}
      />
      <AppTextInput
        name="password"
        placeholder="Enter password"
        control={control}
        errors={errors}
      />
      <AppButton
        title="Submit"
        // style={{ backgroundColor: "green", fontSize: 30 }}

        onPress={handleSubmit(onSubmit)}
      />

      {/* <Button color="green"   /> */}
    </View>
  );
}
