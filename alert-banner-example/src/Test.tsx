import { EvaluationType, useLekkoConfigDLE } from "@lekko/react-sdk";

function Test() {
  const { evaluation: data, isEvaluationLoading } = useLekkoConfigDLE({
    namespaceName: "default",
    configName: "new-bool-2",
    evaluationType: EvaluationType.BOOL,
  });

  return (
    <div>{isEvaluationLoading ? <div>Loading</div> : <div>{data}</div>}</div>
  );
}

export default Test;
