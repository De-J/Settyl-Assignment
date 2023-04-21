import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function Chart() {
    const chartQuery = useQuery({
        queryKey: ["chartData"],
        queryFn: () => newRequest.get("/chart?status=status&dept=department")
            .then((res) => (res.data))
    })

    if (chartQuery.isLoading)
        return <h1>loading...</h1>

    if (chartQuery.isError)
        return <pre>{JSON.stringify(empQuery.error)}</pre>

    const data1 = {
        labels: chartQuery.data[0],
        datasets: [
            {
                data: [chartQuery.data[1], chartQuery.data[2], chartQuery.data[3]],
                backgroundColor: ['aqua', 'orangered', 'purple']
            }
        ],
    }

    const data2 = {
        labels: chartQuery.data[4],
        datasets: [
            {
                data: [chartQuery.data[5], chartQuery.data[6], chartQuery.data[7]],
                backgroundColor: ['aqua', 'orangered', 'purple']
            }
        ],
    }

    const options = {}

    return (
        <div className="mt-10 flex gap-10">
            <Pie
                data={data1}
                options={options}>
            </Pie>
            <Pie
                data={data2}
                options={options}>
            </Pie>
        </div>
    )

}