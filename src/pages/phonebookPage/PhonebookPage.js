import PhonebookForm from "../../Components/PhonebookForm/PhonebookForm";
import PhonebookList from "../../Components/PhonebookList/PhonebookList";
import PhonebookSearch from "../../Components/PhonebookSearch/PhonebookSearch";

export default function phonebookPage() {
  return (
    <>
      <PhonebookForm />
      <PhonebookSearch />
      <PhonebookList />
    </>
  );
}
