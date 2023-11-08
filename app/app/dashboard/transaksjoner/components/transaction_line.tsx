"use client";

import { TrashIcon } from "@heroicons/react/20/solid";
import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { NewTransactionForm } from "../ny/page";
import { TextInput } from "../../components/text_input";
import { CurrencyInput } from "../../components/currency_input";
import { DateInput } from "../../components/date_input";

interface TransactionLineProps {
  index: number;
  register: UseFormRegister<NewTransactionForm>;
  errors: FieldErrors<NewTransactionForm>;
  remove: UseFieldArrayRemove;
}

export default function TransactionLine(props: TransactionLineProps) {
  function removeLine() {
    props.remove(props.index);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full rounded-lg border-gray-900/5 bg-gray-50 p-5">
      <div className="min-h">
        <p># {props.index + 1}</p>
      </div>
      <TextInput
        register={props.register}
        error_message={
          props.errors.transactions &&
          props.errors.transactions[props.index]?.description?.message
        }
        errors={props.errors}
        form_identifier={`transactions.${props.index}.description`}
        name="Beskrivelse"
        placeholder=""
      />
      <CurrencyInput
        register={props.register}
        error_message={
          props.errors.transactions &&
          props.errors.transactions[props.index]?.in?.message
        }
        errors={props.errors}
        form_identifier={`transactions.${props.index}.in`}
        name="Inn"
        placeholder=""
      />
      <CurrencyInput
        register={props.register}
        error_message={
          props.errors.transactions &&
          props.errors.transactions[props.index]?.out?.message
        }
        errors={props.errors}
        form_identifier={`transactions.${props.index}.out`}
        name="Ut"
        placeholder=""
      />
      <DateInput
        register={props.register}
        error_message={
          props.errors.transactions &&
          props.errors.transactions[props.index]?.date?.message
        }
        errors={props.errors}
        form_identifier={`transactions.${props.index}.date`}
        name="Dato"
        placeholder=""
      />
      <TrashIcon
        onClick={removeLine}
        className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
    </div>
  );
}
