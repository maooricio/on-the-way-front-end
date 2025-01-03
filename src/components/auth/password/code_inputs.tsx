import {
  ChangeEvent,
  ClipboardEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IError } from "../../../utils/data/erros";

interface Props {
  initialState: string[];
  error: IError;
  setFormData: Dispatch<SetStateAction<string[]>>;
}

const CodeInputs = ({ initialState, error, setFormData }: Props) => {
  const [codeArray, setCodeArray] = useState<string[]>(initialState);
  const inputRefs = useRef<Map<number, HTMLInputElement>>(new Map());

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.trim();

    if (value.length <= 1) {
      setCodeArray(codeArray.map((code, i) => (i === index ? value : code)));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key === "Backspace" && !target.value) {
      const prevInput = target.previousElementSibling as HTMLInputElement;

      if (prevInput) prevInput.focus();
    } else if (target.value && e.key !== "Backspace") {
      const nextInput = target.nextElementSibling as HTMLInputElement;

      if (nextInput) nextInput.focus();
    }
  };

  const handleFocus = (index: number) => {
    const emptyIndex = codeArray.findIndex((value) => value === "");
    const lastEmptyIndex =
      emptyIndex === -1 ? codeArray.length - 1 : emptyIndex;

    if (index < codeArray.length - 1 && codeArray[index + 1] !== "") {
      const lastFilledIndex = codeArray
        .map((value, idx) => ({ value, idx }))
        .filter((item) => item.value !== "")
        .pop()?.idx;
      const input = inputRefs.current.get(lastFilledIndex!);

      if (lastFilledIndex !== undefined && input) {
        input.focus();
      }
      return;
    }

    if (index !== lastEmptyIndex && codeArray[index] !== "") {
      const input = inputRefs.current.get(index);
      input!.focus();
    } else if (inputRefs.current.get(lastEmptyIndex)) {
      const input = inputRefs.current.get(lastEmptyIndex);
      input!.focus();
    }
  };

  const handleOnPaste = (
    e: ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");

    const pastedDataCode = pastedData.slice(0, 6);
    const pastedDataArray = pastedDataCode.split("");

    do {
      if (pastedDataArray.length < 6) {
        pastedDataArray.push("");
      }
    } while (pastedDataArray.length < 6);

    setCodeArray(pastedDataArray);
    const input = inputRefs.current.get(index);

    input!.blur();
  };

  useEffect(() => {
    setFormData(codeArray);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeArray]);

  return (
    <section className="code-inputs-container">
      {codeArray.map((i, index) => (
        <input
          key={`code-input-${index}`}
          ref={(el) => {
            if (el) inputRefs.current.set(index, el);
            else inputRefs.current.delete(index);
          }}
          type="text"
          value={i}
          placeholder="-"
          className={`code-input ${
            error.value.length > 0 && i.length === 0 ? "input-has-error" : ""
          }`}
          onChange={(e) => handleOnChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e)}
          onFocus={() => handleFocus(index)}
          onPaste={(e) => handleOnPaste(e, index)}
        />
      ))}
    </section>
  );
};

export default CodeInputs;
