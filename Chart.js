import React, { createContext, useState } from 'react';
import ChartChild from './ChartChild';
export const ComposentContext = createContext();

function Chart (props) {

    const [dataList, setDataList] = useState([
        {
        name: '1',
        dataValue: 3000,
        },
        {
        name: '2',
        dataValue: 2870,
        },
        {
        name: '3',
        dataValue: 1870,
        },
        {
        name: '4',
        dataValue: 2780,
        },
        {
        name: '5',
        dataValue: 1890,
        },
        {
        name: '6',
        dataValue: 2390,
        },
        {
        name: '7',
        dataValue: 3490,
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let value = 1 * e.target.children[0].value;
    
        let newData = {
            name: `${dataList.length + 1}`,
            dataValue: value,
            };

        setDataList([...dataList, newData]);

        console.log(dataList);
    };

    return(

        <>
            <ComposentContext.Provider value={dataList}>
                <ChartChild/>
            </ComposentContext.Provider>

            <form onSubmit={ handleSubmit }>

                <input type='number' placeholder='Entrez une valeur'></input>
                
                <button>Validez</button>

            </form>
        </>
        
    );

}

export default Chart;

// function Chart () {

//     const [entreprise, setEntreprise] = useState("");

//     const data = [
//         {
//           name: '1',
//           entreprise1: 3000,
//           entreprise2: 2400,
//           entreprise3: 2010,
//         },
//         {
//           name: '2',
//           entreprise1: 2870,
//           entreprise2: 1400,
//           entreprise3: 2210,
//         },
//         {
//           name: '3',
//           entreprise1: 1870,
//           entreprise2: 3600,
//           entreprise3: 2290,
//         },
//         {
//           name: '4',
//           entreprise1: 2780,
//           entreprise2: 3010,
//           entreprise3: 2000,
//         },
//         {
//           name: '5',
//           entreprise1: 1890,
//           entreprise2: 4800,
//           entreprise3: 4000,
//         },
//         {
//           name: '6',
//           entreprise1: 2390,
//           entreprise2: 3800,
//           entreprise3: 1800,
//         },
//         {
//           name: '7',
//           entreprise1: 3490,
//           entreprise2: 4300,
//           entreprise3: 2100,
//         },
//       ]


//       handleSubmit
//       const handleSubmit = (e) => {
//         e.preventDefault()

//         let entrepriseSelect = e.target.children[1].value;

//         if (entrepriseSelect === 'entreprise1') {
//             setEntreprise("entreprise1");
//         } else if (entrepriseSelect === 'entreprise2') {
//             setEntreprise("entreprise2");
//         } else if (entrepriseSelect === 'entreprise3') {
//             setEntreprise("entreprise3");
//         }

//       };

//       return (
//         <div>

//             <LineChart
//                 width={800}
//                 height={400}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 25,
//                     left: 25,
//                     bottom: 5,
//                 }}
//             >
                
//                 <CartesianGrid strokeDasharray="5 5" />

//                 <XAxis dataKey="name"/>

//                 <YAxis/>
                
//                 <Legend/>

//                 <Line type="monotone" dataKey={entreprise} stroke="#61dafb"/>

//             </LineChart>

//             <BarChart width={800} height={400} data={data}>
//                 <Bar dataKey={entreprise} fill="#61dafb" />
//             </BarChart>

//             <form onSubmit={ handleSubmit }>

//                 <label>Ajoutez : </label>

//                 <input></input>
                
//                 <button>Validez</button>

//             </form>

//         </div>
//       );

// }