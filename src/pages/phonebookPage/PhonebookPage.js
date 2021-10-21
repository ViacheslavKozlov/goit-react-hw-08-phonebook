import PhonebookForm from "../../Components/PhonebookForm/PhonebookForm";
// import PhonebookHeadline from "../../Components/PhonebookHeadline/PhonebookHeadline";
import PhonebookList from "../../Components/PhonebookList/PhonebookList";
// import PhonebookListHeadline from "../../Components/PhonebookListHeadline/PhonebookListHeadline";
import PhonebookSearch from "../../Components/PhonebookSearch/PhonebookSearch";

export default function phonebookPage() {
  return (
    <>
      {/* <PhonebookHeadline /> */}
      <PhonebookForm />
      {/* <PhonebookListHeadline /> */}
      <PhonebookSearch />
      <PhonebookList />
    </>
  );
}
