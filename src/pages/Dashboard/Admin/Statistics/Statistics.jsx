import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import SectionTitle from '../../../../pages/Shared/SectionTitle/SectionTile';


const Statistics = () => {

    const axiosSecure = useAxiosSecure()
    //   Fetch users Data
    const {
        data: booking = [],
    } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/bookings`)
            return data
        },
    })
    // const {bookingDate} = booking

    console.log(booking)

    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'basic-bar-chart',
        },
        xaxis: {
            categories: ['10-06-2024', '11-06-2024','12-06-2024',],
        },
    });

    const [chartSeries, setChartSeries] = useState([
        
        {
            name: 'Series 1',
            data: [1, 3, 2],
        },
    ]);
    return (
        <div>
            <SectionTitle heading={'Statistics'}></SectionTitle>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                width="500"
            />
        </div>
    );
};

export default Statistics;