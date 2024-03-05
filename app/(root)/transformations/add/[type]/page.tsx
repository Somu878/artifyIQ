import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const trandformation = transformationTypes[type];
  return (
    <>
      <Header title={trandformation.title} subtitle={trandformation.subTitle} />
      <TransformationForm />
    </>
  );
};

export default AddTransformationTypePage;
