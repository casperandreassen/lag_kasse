import TransactionTable from "../transactions_table";

export default async function Page({ params }: { params: { slug: string } }) {
  return <TransactionTable />;
}
