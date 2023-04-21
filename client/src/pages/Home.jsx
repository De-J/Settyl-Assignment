import UserCard from "../components/UserCard"
import newRequest from '../utils/newRequest';
import { useQuery } from "@tanstack/react-query";
import Chart from "../components/Chart";

export default function Home() {
  const empQuery = useQuery({
    queryKey: ["employeeRecords"],
    queryFn: () => newRequest.get("/get").then((res) => (res.data))
  })

  if (empQuery.isLoading)
    return <h1>loading...</h1>

  if (empQuery.isError)
    return <pre>{JSON.stringify(empQuery.error)}</pre>

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-1 ml-16 p-6 cursor-pointer justify-center">
        {empQuery.data.map(record => (<UserCard {...record} />))}
      </div>
      <Chart />
    </div>
  )
}