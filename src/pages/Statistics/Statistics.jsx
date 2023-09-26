import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [totalDonation, setTotalDonation] = useState(100)
    const [yourDonation, setYourDonation] = useState(0)
    const cards = useLoaderData();
    useEffect(() => {
        const donationsItem = JSON.parse(localStorage.getItem('donations')) || [];
        const totalDonationL = cards.length;
        const yourDonationL = donationsItem.length;
        const yourDonate = (yourDonationL / totalDonationL) * 100; 
        const totalDonate = 100 - yourDonate;
        const yourDonatedPercentage = yourDonate.toFixed(1)
        const totalDonatedPercentage = totalDonate.toFixed(1)
        setTotalDonation(parseFloat(yourDonatedPercentage));
        setYourDonation(parseFloat(totalDonatedPercentage));
        // console.log(yourDonate , totalDonate , yourDonatedPercentage, totalDonatedPercentage )
    }, [cards]);
    
    const data = [
        { name: 'Group A', value: yourDonation },
        { name: 'Group B', value: totalDonation },
      ];

    const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} fontWeight={700} fontSize={'20px'} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

        return(
        <div>
        <div className="min-h-[70vh]">
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={170}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
        </div>
        </div >
    );
};

export default Statistics;