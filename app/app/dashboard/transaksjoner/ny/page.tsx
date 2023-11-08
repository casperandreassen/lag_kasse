"use client";
import TransactionLine from "../components/transaction_line";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { HeaderWithActionButtons } from "../../components/header_with_action_buttons";
import { DividerWithActionButton } from "../../components/divider_with_action_button";
import { SelectInput } from "../../components/select_input";

export interface NewTransactionForm {
  group: string;
  transactions: TransactionLine[];
}

interface TransactionLine {
  description: string;
  in: number;
  out: number;
  date: Date;
}

export default function NewTransaction() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTransactionForm>({
    defaultValues: {
      group: "1",
      transactions: [{ description: "", in: 0, out: 0, date: new Date() }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "transactions",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="p-4 flex flex-col gap-5">
      <HeaderWithActionButtons
        button1Name={"Avbryt"}
        button1Action={function (): void {
          throw new Error("Function not implemented.");
        }}
        button2Name={"Lagre"}
        button2Form={"transaction_form"}
        title={"Registrer nye transaksjoner"}
      />
      <form
        id="transaction_form"
        className="flex flex-col justify-start gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SelectInput
          register={register}
          error_message={errors.transactions && errors.group?.message}
          errors={errors}
          options={[
            { name: "Gutter 16", value: "gutter-16" },
            { name: "Jenter 16", value: "jenter-16" },
          ]}
          form_identifier={`group`}
          name="Gruppe"
          placeholder=""
        />
        <div className="flex flex-col gap-4">
          <label
            htmlFor="transactions"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Transaksjoner
          </label>
          {fields.map((field, index) => {
            return (
              <TransactionLine
                key={field.id}
                index={index}
                register={register}
                errors={errors}
                remove={remove}
              />
            );
          })}
        </div>
      </form>
      <DividerWithActionButton
        action={() =>
          append({
            description: "",
            in: 0,
            out: 0,
            date: new Date(),
          })
        }
        name="Ny linje"
      />
    </div>
  );
}
