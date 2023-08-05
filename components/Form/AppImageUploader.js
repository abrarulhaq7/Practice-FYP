import { View } from "react-native";
import { Input, Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";

export default function AppImageUploader({
  name,
  placeholder,
  icon,
  control,
  keyboardType,
  maxLength,
  style,
  errors,
}) {
  return (
    <View style={{ marginVertical: 5 }}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.container}>
            <Button
              status="primary"
              style={{ marginBottom: 10, borderRadius: 15 }}
              accessoryLeft={
                <Entypo name="image-inverted" size={20} color="white" />
              }
              onPress={handlePickImage}
            >
              Upload Item photo
            </Button>

            <View>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 150, height: 150, borderRadius: 15 }}
                />
              )}
            </View>
          </View>
          //   <Input
          //     size="large"
          //     status="control"
          //     style={style}
          //     value={value}
          //     maxLength={maxLength}
          //     onChangeText={onChange}
          //     placeholder={placeholder}
          //     keyboardType={keyboardType}
          //     textStyle={{ fontSize: 22, paddingVertical: 3 }}
          //     accessoryRight={<Ionicons name={icon} size={24} color="black" />}
          //   />
        )}
      />
      {errors?.[name] && (
        <Text status="control" style={{ fontWeight: 600, marginLeft: 2 }}>
          {name} required
        </Text>
      )}
    </View>
  );
}
