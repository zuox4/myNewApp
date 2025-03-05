import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
const DataChildren = ({ name, id, onSave, loadData }) => {
    const [id_l, setId] = useState(null)
    const [d1, set1] = useState('');
    const [d2, set2] = useState('');
    const [d3, set3] = useState('');
    const [d4, set4] = useState('');
    const [d5, set5] = useState('');
    const timeOptions = ['09:00', '10:30', '11:20', '12:20', '13:20', '14:20', '15:10'];
    const [isLoad, setLoad] = useState(false)
    
    useEffect(() => {
        const data = [id, d1, d2, d3, d4, d5];
        onSave({ name, data });

    }, [d1, d2, d3, d4, d5, id, name]);


    function setData(){
        let chData = loadData.find(el=>el.ch_id===id)
        setId(chData?chData['id']:'')
        set1(chData?chData['t1']:'')
        set2(chData?chData['t2']:'')
        set3(chData?chData['t3']:'')
        set4(chData?chData['t4']:'')
        set5(chData?chData['t5']:'')
        setLoad(false)
    }


    const saveSome = (id, t, value) => {
        axios.put('http://192.168.22.8:2504/api/update', {id:id, column:t, new_value:value}).then(function (res){
          console.log(res)

            if(t==='t1'){
                set1(value)
            }
            if(t==='t2'){
                set2(value)
            }
            if(t==='t3'){
                set3(value)
            }
            if(t==='t4'){
                set4(value)
            }
            if(t==='t5'){
                set5(value)
            }

        }).catch(function (error){
          console.log(error)
        });
        console.log('Сохраненные данные:', id, t, value);

    };
    useEffect(()=>{
        setLoad(true)
        setData()

    }, [])

    return (
        !isLoad&&<div>
            
            <div style={{ display: 'flex' }}>
            <div style={{width:'250px'}}>{name}</div>
            <div >
                {[d1, d2, d3, d4, d5].map((value, index) => (
                    <select
                        key={index}
                        className='styled-select'
                        value={value}
                        
                        onChange={(e) => {
                            index === 0 ? saveSome(id_l, "t1", e.target.value) :
                            index === 1 ? saveSome(id_l, "t2", e.target.value) :
                            index === 2 ? saveSome(id_l, "t3", e.target.value) :
                            index === 3 ? saveSome(id_l, "t4", e.target.value) :
                            saveSome(id_l, "t5", e.target.value);
                        }}
                    >
                        <option value="" disabled>Время выхода: </option>
                        {timeOptions.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                ))}
                </div>
            </div>
        </div>
    );
};

function App() {
    const [loadData, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const classes = ['11Б', '11Е', '11Т', '11И', '11Э','11Г','11С'];
    useEffect(()=>{
        setLoading(true)
        axios.get('http://192.168.22.8:2504/api/data').then(res=>{
            setData(res.data.data)
            console.log(res.data.data)
            setLoading(false)
        })
    },[])
    const [className, setClassName] = useState('');
    const data = [
        {
            "className": "11\u0411",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0443\u043b\u044b\u0433\u0438\u043d \u0415\u0433\u043e\u0440",
                    "id": 277,
                    "numberPhone": "89265851444"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0443\u043b\u044b\u0433\u0438\u043d \u041d\u0438\u043a\u0438\u0442\u0430",
                    "id": 278,
                    "numberPhone": "89263318555"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0412\u0430\u0432\u0438\u043b\u043e\u0432\u0430 \u041b\u0430\u0434\u0430",
                    "id": 279,
                    "numberPhone": "89775430113"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u0435\u0442\u0446 \u041a\u0430\u0439 \u0410\u043b\u0435\u043a\u0441",
                    "id": 280,
                    "numberPhone": "89259459181"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u0440\u043e\u0437\u0434\u043e\u0432\u0441\u043a\u0430\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",
                    "id": 281,
                    "numberPhone": "89360000427"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0418\u043b\u044c\u0435\u043d\u043a\u043e \u0418\u043b\u044c\u044f",
                    "id": 282,
                    "numberPhone": "89265287300"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0418\u043b\u044c\u0438\u043d \u041c\u0430\u043a\u0441\u0438\u043c",
                    "id": 283,
                    "numberPhone": "89166253939"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u0440\u0430\u0432\u0430\u0439\u043d\u044b\u0439 \u041c\u0438\u0445\u0430\u0438\u043b",
                    "id": 284,
                    "numberPhone": "89153205114"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u0440\u043f\u043e\u0432 \u0418\u0432\u0430\u043d",
                    "id": 285,
                    "numberPhone": "89099481166"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u0430 \u0412\u0430\u043b\u0435\u0440\u0438\u044f",
                    "id": 286,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041b\u043e\u043c\u043e\u043d\u043e\u0441 \u0410\u043d\u043d\u0430",
                    "id": 287,
                    "numberPhone": "89251424708"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0430\u043a\u0430\u0440\u043e\u0432\u0430 \u0421\u043e\u0444\u044c\u044f",
                    "id": 288,
                    "numberPhone": "89255124605"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0430\u0441\u044e\u043a\u043e\u0432 \u0415\u0433\u043e\u0440",
                    "id": 289,
                    "numberPhone": "89689904275"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0430\u0445\u043d\u0443\u0442\u0438\u043d \u0421\u0430\u0432\u0435\u043b\u0438\u0439",
                    "id": 290,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u043e\u043b\u0434\u0438\u043a\u043e\u0432 \u0410\u043d\u0434\u0440\u0435\u0439",
                    "id": 291,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041d\u0430\u0433\u043e\u0440\u043d\u044b\u0439 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d",
                    "id": 292,
                    "numberPhone": "89859044423"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u0435\u0442\u0440\u0435\u043d\u043a\u043e \u041c\u0438\u043b\u0430\u043d",
                    "id": 293,
                    "numberPhone": "89264233078"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0430\u0432\u0435\u043d\u043a\u043e\u0432 \u0415\u0433\u043e\u0440",
                    "id": 294,
                    "numberPhone": "89197627594"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0435 \u0421\u0435\u043c\u0435\u043d",
                    "id": 295,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0430\u043b\u0430\u043d\u043e\u0432\u0430 \u041d\u0438\u043a\u0430",
                    "id": 296,
                    "numberPhone": "89162955722"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0424\u0438\u043b\u0438\u043d \u041c\u0430\u0442\u0432\u0435\u0439",
                    "id": 297,
                    "numberPhone": "89259167053"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0424\u0438\u043b\u0438\u043f\u043f\u043e\u0432 \u0421\u0442\u0435\u043f\u0430\u043d",
                    "id": 298,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0427\u0435\u043a\u043c\u0430\u0441\u043e\u0432 \u041a\u0438\u0440\u0438\u043b\u043b",
                    "id": 299,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0427\u0435\u0440\u043d\u044b\u0448 \u041c\u0430\u0439\u044f",
                    "id": 300,
                    "numberPhone": "89154566550"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0443\u0433\u0430\u0435\u0432\u0430 \u0410\u043b\u0438\u043d\u0430",
                    "id": 301,
                    "numberPhone": "89017200775"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0443\u0433\u0430\u0435\u0432\u0430 \u0410\u043b\u0438\u0441\u0430",
                    "id": 302,
                    "numberPhone": "89773688368"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0443\u0447\u0438\u043d\u0441\u043a\u0430\u044f \u041a\u0440\u0438\u0441\u0442\u0438\u043d\u0430",
                    "id": 2092,
                    "numberPhone": "89032485618"
                }
            ]
        },
        {
            "className": "11\u042d",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0410\u0433\u0430\u0444\u043e\u043d\u0446\u0435\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 641,
                    "numberPhone": "89266392264"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u043c\u0438\u0440\u0445\u0430\u043d\u043e\u0432\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 642,
                    "numberPhone": "89686483014"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0412\u043e\u0440\u043e\u043d\u0438\u043d\u0430 \u041a\u0441\u0435\u043d\u0438\u044f",
                    "id": 643,
                    "numberPhone": "89654068243"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0412\u043e\u0440\u043e\u043d\u043e\u0432 \u042f\u0440\u043e\u0441\u043b\u0430\u0432",
                    "id": 644,
                    "numberPhone": "89057456398"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u0440\u0438\u0433\u043e\u0440\u044c\u044f\u043d \u041c\u0430\u0440\u0438\u0430\u043d\u043d\u0430",
                    "id": 645,
                    "numberPhone": "89035335571"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u0435\u0432\u044f\u0442\u043a\u0438\u043d\u0430 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430",
                    "id": 646,
                    "numberPhone": "89161666366"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0417\u0430\u043a\u0443\u0441\u0438\u043b\u043e\u0432 \u0413\u043b\u0435\u0431",
                    "id": 647,
                    "numberPhone": "89645286958"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0418\u043b\u044c\u0438\u043d \u0420\u0443\u0441\u043b\u0430\u043d",
                    "id": 648,
                    "numberPhone": "89851434833"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u0440\u043f\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b",
                    "id": 649,
                    "numberPhone": "89775119163"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0438\u0440\u0438\u043b\u043b\u043e\u0432 \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432",
                    "id": 650,
                    "numberPhone": "89660244355"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043b\u043e\u0434\u043a\u043e \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
                    "id": 651,
                    "numberPhone": "89104405015"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u0440\u043e\u0432\u0430\u0439\u043d\u0430\u044f \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430",
                    "id": 652,
                    "numberPhone": "89269005174"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041b\u043e\u0448\u043a\u0430\u0440\u0435\u0432\u0430 \u0410\u0440\u0438\u043d\u0430",
                    "id": 653,
                    "numberPhone": "89295605476"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0438\u0448\u0438\u043d\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f",
                    "id": 654,
                    "numberPhone": "89858854876"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041d\u0435\u0441\u0442\u0435\u0440\u043e\u0432 \u0422\u0438\u043c\u0443\u0440",
                    "id": 655,
                    "numberPhone": "89687012559"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041e\u0434\u0438\u043d\u0446\u043e\u0432 \u0414\u043c\u0438\u0442\u0440\u0438\u0439",
                    "id": 656,
                    "numberPhone": "89036184725"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041e\u0441\u0442\u0440\u0435\u0446\u043e\u0432\u0430 \u0410\u043b\u0438\u0441\u0430",
                    "id": 657,
                    "numberPhone": "89261288201"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u0435\u0442\u0440\u043e\u0432\u0430 \u0418\u043b\u043e\u043d\u0430",
                    "id": 658,
                    "numberPhone": "89161994474"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u0438\u043d\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u0410\u043d\u0434\u0440\u0435\u0439",
                    "id": 659,
                    "numberPhone": "89268533884"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u043e\u043f\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 660,
                    "numberPhone": "89857407696"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u0430\u0437\u043c\u0430\u0445\u0430\u0435\u0432\u0430 \u041c\u0430\u0440\u0438\u044f",
                    "id": 661,
                    "numberPhone": "89859381368"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u043e\u0433\u043e\u0432 \u0418\u0432\u0430\u043d",
                    "id": 662,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043e\u0431\u043e\u043b\u0435\u0432 \u0421\u0435\u0440\u0430\u0444\u0438\u043c",
                    "id": 663,
                    "numberPhone": "89167594774"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0438\u0445\u043e\u043d\u043e\u0432 \u0410\u0440\u0442\u0451\u043c",
                    "id": 664,
                    "numberPhone": "89671200903"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u043e\u043f\u043e\u0440\u043e\u0432 \u0413\u043b\u0435\u0431",
                    "id": 665,
                    "numberPhone": "89267562712"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0443\u043a\u0442\u0430\u0440\u043e\u0432\u0430 \u0421\u0435\u0440\u0430\u0444\u0438\u043c\u0430",
                    "id": 666,
                    "numberPhone": "89299522490"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0445\u0430\u0433\u0430\u043f\u0441\u043e\u0435\u0432 \u0410\u0440\u0442\u0451\u043c",
                    "id": 667,
                    "numberPhone": "89859938021"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0424\u043e\u043b\u0438\u043c\u043e\u043d\u043e\u0432\u0430 \u0412\u0430\u0440\u0432\u0430\u0440\u0430",
                    "id": 668,
                    "numberPhone": "89776308724"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0424\u0440\u043e\u043b\u043e\u0432 \u0410\u0440\u0441\u0435\u043d\u0438\u0439",
                    "id": 669,
                    "numberPhone": "89267574710"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0425\u0430\u0436\u0430\u0435\u0432\u0430 \u0410\u043b\u0438\u043d\u0430",
                    "id": 670,
                    "numberPhone": "89104803614"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0430\u0448\u043a\u043e\u0432 \u0410\u043d\u0430\u0442\u043e\u043b\u0438\u0439",
                    "id": 671,
                    "numberPhone": "89037117557"
                }
            ]
        },
        {
            "className": "11\u0415",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0430\u043b\u0430\u0447\u0438\u0445\u0438\u043d \u042f\u0440\u043e\u0441\u043b\u0430\u0432",
                    "id": 952,
                    "numberPhone": "89992777175"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0430\u0440\u0431\u0430\u0448\u043e\u0432\u0430 \u041f\u043e\u043b\u0438\u043d\u0430",
                    "id": 953,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043d\u0435\u0435\u0432\u0430 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",
                    "id": 954,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u0441\u0438\u043d\u0435\u043d\u043a\u043e \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430",
                    "id": 955,
                    "numberPhone": "89250605866"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u0441\u043e\u0432\u0430 \u0416\u0430\u043d\u043d\u0430",
                    "id": 956,
                    "numberPhone": "89264909096"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041b\u0430\u0431\u0437\u043e \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430",
                    "id": 957,
                    "numberPhone": "89095534414"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041b\u0438\u0434\u0436\u0438\u0435\u0432\u0430 \u042d\u0432\u0435\u043b\u0438\u043d\u0430",
                    "id": 958,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041b\u043e\u0431\u0430\u043d\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u044f",
                    "id": 959,
                    "numberPhone": "89266603544"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0430\u043a\u043d\u0430\u0441\u0441\u0438 \u041c\u043e\u0445\u0430\u043c\u043c\u0435\u0434 \u041a\u044d\u0440\u0438\u043c",
                    "id": 960,
                    "numberPhone": "89067537521"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041d\u043e\u0432\u043e\u0441\u0435\u043b\u043e\u0432\u0430 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",
                    "id": 961,
                    "numberPhone": "89636094271"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041e\u0440\u043b\u043e\u0432 \u0421\u0435\u0440\u0433\u0435\u0439",
                    "id": 962,
                    "numberPhone": "89260890544"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u043e\u043c\u0435\u043b\u043e\u0432 \u0411\u043e\u0433\u0434\u0430\u043d",
                    "id": 963,
                    "numberPhone": "89998509179"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u0430\u0441\u0443\u043b\u043e\u0432\u0430 \u0417\u0430\u0440\u0438\u043d\u0430",
                    "id": 964,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0438\u0434\u043e\u0440\u043e\u0432\u0430 \u0412\u0430\u0440\u0432\u0430\u0440\u0430",
                    "id": 965,
                    "numberPhone": "89055910650"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0427\u0430\u0449\u0438\u043d\u0430 \u0421\u043e\u0444\u0438\u044f",
                    "id": 966,
                    "numberPhone": "89260864488"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0427\u0443\u0431\u0430\u0440\u044b\u043a\u0438\u043d\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 967,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u042f\u043a\u043e\u0432\u043b\u0435\u0432 \u0420\u043e\u043c\u0430\u043d",
                    "id": 968,
                    "numberPhone": "89265421048"
                }
            ]
        },
        {
            "className": "11\u0422",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0430\u0442\u0443\u0440\u0430 \u042f\u0440\u043e\u0441\u043b\u0430\u0432",
                    "id": 2072,
                    "numberPhone": "89777179270"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0440\u0430\u0443\u0434\u0435 \u0410\u043d\u0442\u043e\u043d",
                    "id": 2073,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u0440\u043e\u0437\u0434\u043e\u0432 \u0421\u0432\u044f\u0442\u043e\u0441\u043b\u0430\u0432",
                    "id": 2074,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0417\u0430\u0439\u0446\u0435\u0432 \u0411\u043e\u0433\u0434\u0430\u043d",
                    "id": 2075,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0417\u0430\u0445\u0443\u0440\u0434\u0430\u0435\u0432\u0430 \u041f\u043e\u043b\u0438\u043d\u0430",
                    "id": 2076,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0438\u0440\u043f\u0438\u043d\u0441\u043a\u0430\u044f \u041c\u0430\u0440\u0438\u044f",
                    "id": 2077,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043d\u0434\u0440\u0430\u0448\u043a\u0438\u043d \u0410\u043b\u0435\u043a\u0441\u0435\u0439",
                    "id": 2078,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043d\u043a\u0438\u043d \u0420\u043e\u043c\u0430\u043d",
                    "id": 2079,
                    "numberPhone": "89152287197"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432 \u041c\u0430\u043a\u0430\u0440",
                    "id": 2080,
                    "numberPhone": "89654286396"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0443\u043f\u0446\u043e\u0432\u0430 \u0423\u043b\u044c\u044f\u043d\u0430",
                    "id": 2081,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0438\u043d\u043e\u0432\u0449\u0438\u043a\u043e\u0432 \u041d\u0438\u043a\u043e\u043b\u0430\u0439",
                    "id": 2082,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u043e\u043b\u0435\u0432 \u0422\u0438\u043c\u043e\u0444\u0435\u0439",
                    "id": 2083,
                    "numberPhone": "89150218772"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041e\u043b\u044c\u0447\u0435\u0434\u0430\u0435\u0432\u0441\u043a\u0438\u0439 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 2084,
                    "numberPhone": "89691839000"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041e\u0441\u0442\u0440\u0435\u0439\u043a\u043e\u0432\u0430 \u0421\u043e\u0444\u044c\u044f",
                    "id": 2085,
                    "numberPhone": "89253310858"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u0430\u043d\u0430\u0441\u0435\u043d\u043a\u043e \u041f\u043e\u043b\u0438\u043d\u0430",
                    "id": 2086,
                    "numberPhone": "89160806424"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0430\u0432\u043e\u0441\u0442\u0438\u043d \u0420\u043e\u0431\u0435\u0440\u0442",
                    "id": 2087,
                    "numberPhone": "89856192494"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043e\u043a\u043e\u043b\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 2088,
                    "numberPhone": "89252328845"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0430\u0441\u044e\u043a \u0421\u043e\u0444\u0438\u044f",
                    "id": 2089,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0435\u043f\u0430\u043d\u043e\u0432 \u0424\u0451\u0434\u043e\u0440",
                    "id": 2090,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u043e\u043b\u0441\u0442\u043e\u0439 \u041d\u0438\u043a\u043e\u043b\u0430\u0439",
                    "id": 2091,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0424\u043e\u043c\u0435\u043d\u043a\u043e \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 2093,
                    "numberPhone": "89164823266"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0427\u0430\u0439\u043a\u0430 \u041e\u043b\u0435\u0441\u044f",
                    "id": 2094,
                    "numberPhone": "89257506000"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0432\u0435\u0446\u043e\u0432 \u0422\u0438\u043c\u043e\u0444\u0435\u0439",
                    "id": 2095,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0443\u0440\u043a\u043e \u041c\u0438\u0445\u0430\u0438\u043b",
                    "id": 2096,
                    "numberPhone": "89030008998"
                }
            ]
        },
        {
            "className": "11\u0413",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u0430 \u0410\u043d\u043d\u0430",
                    "id": 3660,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0443\u0431\u043e\u043d \u0421\u043e\u0444\u0438",
                    "id": 3661,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u043e\u043b\u044c\u0442\u0438\u043d\u0430 \u0410\u043d\u0444\u0438\u0441\u0430",
                    "id": 3662,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043c\u043e\u043b\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 3663,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0443\u0437\u0435\u043d\u043a\u043e\u0432\u0430 \u0410\u043d\u043d\u0430",
                    "id": 3664,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041d\u0430\u0431\u0438\u0435\u0432\u0430 \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430",
                    "id": 3665,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041d\u0435\u0441\u0442\u0435\u0440\u043e\u0432\u0430 \u0412\u0430\u0440\u0432\u0430\u0440\u0430",
                    "id": 3666,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0430\u0432\u0438\u0446\u043a\u0430\u044f \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430",
                    "id": 3667,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0435\u043f\u0430\u043d\u043e\u0432\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f",
                    "id": 3668,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0440\u0430\u0445 \u0412\u0435\u0440\u043e\u043d\u0438\u043a\u0430",
                    "id": 3669,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0427\u0435\u0431\u043e\u0442\u0430\u0440\u0435\u0432 \u0418\u0432\u0430\u043d",
                    "id": 3670,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0440\u0430\u0433\u0438\u043d\u0430 \u041f\u043e\u043b\u0438\u043d\u0430",
                    "id": 3904,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u043e\u0440\u043e\u0437\u043e\u0432\u0430 \u0410\u0440\u0438\u043d\u0430",
                    "id": 3905,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u0416\u0435\u043b\u0435\u0437\u043d\u044f\u043a \u0414\u0430\u0440\u044c\u044f",
                    "id": 3906,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043e\u043a\u043e\u043b\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u044f",
                    "id": 3907,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0443\u0437\u044c\u043c\u0438\u043d\u0430 \u041c\u0430\u0440\u0438\u044f",
                    "id": 3908,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0443\u0434\u0440\u044f\u0432\u0446\u0435\u0432\u0430 \u0410\u043d\u043d\u0430",
                    "id": 3909,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u041b\u0443\u0436\u043a\u043e\u0432\u0430 \u0410\u043d\u0433\u0435\u043b\u0438\u043d\u0430",
                    "id": 3910,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043c\u043e\u043b\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 3911,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0443\u0442\u043e\u0432\u0430 \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430",
                    "id": 3912,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u043e\u043d\u043a\u0438\u0445 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",
                    "id": 3913,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u0412\u043e\u043b\u043e\u0431\u0443\u0435\u0432\u0430 \u041f\u043e\u043b\u0438\u043d\u0430",
                    "id": 3914,
                    "numberPhone": null
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u0445\u043c\u0435\u0434\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u044f",
                    "id": 3915,
                    "numberPhone": null
                }
            ]
        },
        {
            "className": "5\u0413",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0435\u0440\u0448 \u0423\u043b\u044c\u044f\u043d\u0430",
                    "id": 2190,
                    "numberPhone": "89295113700"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u043e\u0433\u0434\u0430\u043d\u043e\u0432 \u0415\u0433\u043e\u0440",
                    "id": 2191,
                    "numberPhone": "89999323328"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u0443\u0448\u0443\u0435\u0432\u0430 \u041c\u0430\u0440\u0438\u044f",
                    "id": 2192,
                    "numberPhone": "89167768050"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u0430\u0439\u0434\u0435\u043d\u043a\u043e \u0421\u043e\u0444\u044c\u044f",
                    "id": 2193,
                    "numberPhone": "89685495884"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u0435\u0440\u0430\u0441\u043a\u0438\u043d\u0430 \u0410\u043d\u043d\u0430",
                    "id": 2194,
                    "numberPhone": "89037776378"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u043b\u0443\u0448\u043a\u043e\u0432\u0430 \u0410\u043d\u0442\u043e\u043d\u0438\u043d\u0430",
                    "id": 2195,
                    "numberPhone": "89850686023"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u043e\u043b\u0435\u043d\u0438\u0449\u0435\u0432\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 2196,
                    "numberPhone": "89169821305"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u0435\u0435\u0432 \u041c\u0430\u0440\u0441\u0435\u043b\u044c",
                    "id": 2197,
                    "numberPhone": "89254255245"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u044e\u0431\u0438\u043d \u0421\u0430\u0432\u0432\u0430",
                    "id": 2198,
                    "numberPhone": "89161635376"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0417\u043b\u043e\u0431\u0438\u043d\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 2199,
                    "numberPhone": "89268441620"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0418\u0448\u0443\u0442\u0438\u043d\u0430 \u0412\u0430\u0440\u0432\u0430\u0440\u0430",
                    "id": 2200,
                    "numberPhone": "89161004753"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u0434\u044b\u0440\u043e\u0432\u0430 \u0412\u0430\u043b\u0435\u0440\u0438\u044f",
                    "id": 2201,
                    "numberPhone": "89175331599"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u0440\u043f\u0443\u043a\u043e\u0432\u0430 \u0418\u0440\u0438\u043d\u0430",
                    "id": 2202,
                    "numberPhone": "89999316091"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u0436\u0443\u0445\u0430\u0440\u044c \u0414\u0430\u043d\u0438\u0438\u043b",
                    "id": 2203,
                    "numberPhone": "89859872007"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432 \u0418\u0432\u0430\u043d",
                    "id": 2204,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041b\u0430\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u0410\u043d\u043d\u0430",
                    "id": 2205,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0430\u0440\u0447\u0443\u043a \u0417\u043b\u0430\u0442\u0430",
                    "id": 2206,
                    "numberPhone": "89263064530"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0430 \u041a\u0440\u0438\u0441\u0442\u0438\u043d\u0430",
                    "id": 2207,
                    "numberPhone": "89162971087"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0443\u0445\u0430\u043d\u043e\u0432 \u0414\u0430\u043d\u0438\u0438\u043b",
                    "id": 2208,
                    "numberPhone": "89030093005"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0432\u0430 \u042d\u043c\u0438\u043b\u0438\u044f",
                    "id": 2209,
                    "numberPhone": "89253257109"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u0430\u0432\u043b\u044e\u043a \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
                    "id": 2210,
                    "numberPhone": "89165886167"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u043e\u043b\u044f\u043a\u043e\u0432 \u0418\u0433\u043e\u0440\u044c",
                    "id": 2211,
                    "numberPhone": "89296550662"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u0435\u0443\u0442\u043e\u0432 \u041a\u0438\u0440\u0438\u043b\u043b",
                    "id": 2212,
                    "numberPhone": "89299788107"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0432\u0438\u0440\u0438\u0434\u043e\u0432\u0438\u0447 \u0410\u0440\u0442\u0435\u043c",
                    "id": 2213,
                    "numberPhone": "89652428824"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0435\u043b\u0435\u0437\u043d\u0435\u0432 \u041d\u0438\u043a\u0438\u0442\u0430",
                    "id": 2214,
                    "numberPhone": "89017226659"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0435\u0440\u043e\u0432\u0430 \u0410\u043b\u0451\u043d\u0430",
                    "id": 2215,
                    "numberPhone": "89257857858"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0435\u0440\u043e\u0443\u0441 \u0410\u0433\u0440\u0430\u0444\u0435\u043d\u0430",
                    "id": 2216,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043a\u0430\u043a\u0430\u043b\u0438\u043d\u0430 \u041f\u043e\u043b\u0438\u043d\u0430",
                    "id": 2217,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0435\u0444\u0430\u043d\u0446\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b",
                    "id": 2218,
                    "numberPhone": "89156511696"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u044b\u0447\u0435\u0432\u0430 \u0410\u043b\u0438\u0441\u0430",
                    "id": 2219,
                    "numberPhone": "89299152072"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0423\u043b\u0443\u0441\u043e\u0439 \u041c\u0435\u043b\u0438\u0441\u0441\u0430",
                    "id": 2220,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u043e\u043d\u0438\u043d\u0430 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",
                    "id": 2222,
                    "numberPhone": "89685474232"
                }
            ]
        },
        {
            "className": "11\u0421",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0410\u0433\u0438\u0431\u0430\u043b\u043e\u0432\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f",
                    "id": 2283,
                    "numberPhone": "89164954115"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u043a\u0443\u043b\u0438\u043d\u0430 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430",
                    "id": 2284,
                    "numberPhone": "89670625280"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u043b\u0430\u0433\u043e\u0432 \u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432",
                    "id": 2285,
                    "numberPhone": "89253271303"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u0430\u0440\u043d\u043e \u0421\u043e\u0444\u0438\u044f",
                    "id": 2286,
                    "numberPhone": "89859956090"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u0443\u0440\u044c\u044f\u043d\u043e\u0432 \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432",
                    "id": 2287,
                    "numberPhone": "89166212173"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u0435\u043c\u0443\u0445 \u041c\u0430\u0440\u044c\u044f",
                    "id": 2288,
                    "numberPhone": "89670744546"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0416\u0430\u0431\u043a\u043e\u0432\u0430 \u041d\u0430\u0434\u0435\u0436\u0434\u0430",
                    "id": 2289,
                    "numberPhone": "89160633469"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0417\u0435\u043b\u0435\u043d\u0446\u043e\u0432\u0430 \u0421\u043e\u0444\u044c\u044f",
                    "id": 2290,
                    "numberPhone": "89672606185"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u043f\u0443\u0441\u0442\u0438\u043d\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 2291,
                    "numberPhone": "89853175636"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0438\u043c \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",
                    "id": 2292,
                    "numberPhone": "89266316269"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043a\u0448\u0430\u0440\u043e\u0432\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f",
                    "id": 2293,
                    "numberPhone": "89162635519"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u0440\u043e\u043b\u044c \u0410\u043d\u0433\u0435\u043b\u0438\u043d\u0430",
                    "id": 2294,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0440\u043e\u0445\u0438\u043d\u0430 \u042f\u043d\u0430",
                    "id": 2295,
                    "numberPhone": "89166616705"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0443\u043f\u043b\u0438\u043d\u043e\u0432\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 2296,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0438\u043d\u0445\u0430\u0438\u0440\u043e\u0432\u0430 \u0410\u043b\u0438\u044f",
                    "id": 2297,
                    "numberPhone": "89162709700"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u043e\u0438\u0441\u0435\u0435\u0432 \u0410\u043d\u0434\u0440\u0435\u0439",
                    "id": 2298,
                    "numberPhone": "89856464027"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u043e\u043b\u0438\u043d\u043e\u0432\u0430 \u0410\u043d\u043d\u0430",
                    "id": 2299,
                    "numberPhone": "89850545088"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0443\u0445\u0430\u043c\u0435\u0442\u043e\u0432 \u041d\u0430\u0437\u0430\u0440",
                    "id": 2300,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u0435\u043c\u043f\u0435\u043b\u044c \u041a\u0438\u0440\u0430",
                    "id": 2301,
                    "numberPhone": "89160610661"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u043e\u0432\u0438\u043d\u0441\u043a\u0430\u044f \u0412\u0435\u0440\u0430",
                    "id": 2302,
                    "numberPhone": "89859747721"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f",
                    "id": 2303,
                    "numberPhone": "89250742615"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043e\u043d\u0434\u044b\u043a\u043e\u0432\u0430 \u0412\u0435\u0440\u043e\u043d\u0438\u043a\u0430",
                    "id": 2304,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043e\u043d\u0434\u044b\u043a\u043e\u0432 \u0412\u0430\u0441\u0438\u043b\u0438\u0439",
                    "id": 2305,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u043e\u043c\u0430\u0448\u0435\u0435\u0432\u0430 \u0421\u043e\u0444\u044c\u044f",
                    "id": 2306,
                    "numberPhone": "89773949471"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0440\u0435\u0449\u0430\u043b\u0438\u043d\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f",
                    "id": 2307,
                    "numberPhone": "89162736108"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0423\u0441\u0442\u0438\u043c\u0447\u0443\u043a \u041c\u0430\u0440\u043a",
                    "id": 2308,
                    "numberPhone": "89129529518"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0438\u0448\u043a\u0438\u043d\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f",
                    "id": 2309,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0442\u0435\u043d\u0434\u0435\u0440 \u041c\u0430\u043a\u0441\u0438\u043c",
                    "id": 2310,
                    "numberPhone": "89261577687"
                }
            ]
        },
        {
            "className": "11\u041c",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u043d\u043a\u043e \u0412\u0435\u0440\u043e\u043d\u0438\u043a\u0430",
                    "id": 3183,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u043c\u0438\u043d\u043e\u0432\u0430 \u041c\u0430\u0432\u043b\u044e\u0434\u0430",
                    "id": 3184,
                    "numberPhone": "89031827888"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0430 \u041d\u0430\u0441\u0442\u0430\u0441\u044c\u044f",
                    "id": 3185,
                    "numberPhone": "89853631024"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u0440\u0433\u0443\u043d\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b",
                    "id": 3186,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u043e\u043b\u044c\u0448\u0430\u043a\u043e\u0432\u0430 \u041a\u0441\u0435\u043d\u0438\u044f",
                    "id": 3187,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0411\u043e\u0440\u0435\u0446-\u041f\u0435\u0440\u0432\u0430\u043a \u0410\u043d\u0434\u0440\u0435\u0439",
                    "id": 3188,
                    "numberPhone": "89154018968"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0413\u0440\u0438\u0433\u043e\u0440\u044c\u0435\u0432 \u041d\u0438\u043a\u0438\u0442\u0430",
                    "id": 3189,
                    "numberPhone": "89853612047"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u044e\u0431\u0438\u043d\u0430 \u0412\u0430\u0440\u0432\u0430\u0440\u0430",
                    "id": 3190,
                    "numberPhone": "89154129607"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0416\u0435\u043b\u0442\u043e\u0432\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f",
                    "id": 3191,
                    "numberPhone": "89169890126"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u0440\u043f\u0435\u043d\u043a\u043e \u0410\u0440\u0438\u043d\u0430",
                    "id": 3192,
                    "numberPhone": "89173204244"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u0432\u0430\u043b\u0435\u0432\u0430 \u041f\u043e\u043b\u0438\u043d\u0430",
                    "id": 3193,
                    "numberPhone": "89067555090"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u043b\u043e\u043c\u043e\u0435\u0446 \u0422\u0430\u0438\u0441\u0438\u044f",
                    "id": 3194,
                    "numberPhone": "89651283391"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0443\u0440\u044f\u0435\u0432\u0430 \u0414\u0438\u0430\u043d\u0430",
                    "id": 3195,
                    "numberPhone": "89645615184"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 3196,
                    "numberPhone": "89647749665"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0430\u043a\u0430\u0440\u043e\u0432\u0430 \u0414\u0438\u0430\u043d\u0430",
                    "id": 3197,
                    "numberPhone": "89266511038"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u043e\u043a\u0440\u044f\u043a \u042f\u043d\u0430",
                    "id": 3198,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041d\u0430\u0441\u0438\u0431\u0443\u043b\u043b\u0438\u043d\u0430 \u041c\u0438\u043b\u0435\u043d\u0430",
                    "id": 3199,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u043e\u043b\u043e\u0437\u043e\u0432\u0430 \u041b\u0438\u043b\u0438\u044f",
                    "id": 3200,
                    "numberPhone": "89629660977"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u0440\u0438\u0449\u0435\u043f\u043d\u0430\u044f \u0423\u043b\u044c\u044f\u043d\u0430",
                    "id": 3201,
                    "numberPhone": "89252213073"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u0430\u0434\u044e\u043a\u0438\u043d \u041d\u0438\u043a\u043e\u043b\u0430\u0439",
                    "id": 3202,
                    "numberPhone": "89253368475"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u043e\u0434\u0438\u043d\u0430 \u042d\u0432\u0435\u043b\u0438\u043d\u0430",
                    "id": 3203,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u043e\u0434\u0438\u043e\u043d\u043e\u0432\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 3204,
                    "numberPhone": "89663840730"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043a\u0432\u043e\u0440\u0446\u043e\u0432\u0430 \u0421\u043e\u0444\u044c\u044f",
                    "id": 3205,
                    "numberPhone": "89091527842"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0435\u043f\u0430\u043d\u043e\u0432\u0430 \u0410\u043d\u043d\u0430",
                    "id": 3206,
                    "numberPhone": "89779987896"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0442\u0435\u043f\u0438\u043d\u0430 \u0412\u0435\u0440\u043e\u043d\u0438\u043a\u0430",
                    "id": 3207,
                    "numberPhone": "89999087569"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0430\u0440\u0430\u0441\u043e\u0432\u0430 \u0410\u043d\u043d\u0430",
                    "id": 3208,
                    "numberPhone": "89859753385"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0423\u0440\u0430\u043b\u043e\u0432\u0430 \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430",
                    "id": 3209,
                    "numberPhone": "89263280224"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0424\u0435\u0434\u043e\u0440\u0447\u0435\u043d\u043a\u043e \u0414\u0430\u0440\u0438\u043d\u0430",
                    "id": 3210,
                    "numberPhone": "89088635859"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0427\u0435\u043f\u0443\u0440\u043a\u0438\u043d\u0430 \u0414\u0430\u0440\u044c\u044f",
                    "id": 3211,
                    "numberPhone": "89039795790"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0429\u0435\u0442\u0438\u043d\u0449\u0438\u043a\u043e\u0432\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f",
                    "id": 3212,
                    "numberPhone": "89854320340"
                },
                {
                    "birthDate": null,
                    "fullName": "\u042f\u043a\u043e\u0432\u0435\u043d\u043a\u043e \u0421\u0442\u0435\u0444\u0430\u043d\u0438\u044f",
                    "id": 3213,
                    "numberPhone": "89197245674"
                }
            ]
        },
        {
            "className": "11\u0418",
            "students": [
                {
                    "birthDate": null,
                    "fullName": "\u0410\u043b\u0435\u0439\u043d\u0438\u043a\u043e\u0432 \u0414\u043c\u0438\u0442\u0440\u0438\u0439",
                    "id": 3408,
                    "numberPhone": "89852143919"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u0440\u0437\u0430\u043c\u0430\u0441\u0446\u0435\u0432 \u0424\u0451\u0434\u043e\u0440",
                    "id": 3409,
                    "numberPhone": "89257928987"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0410\u0441\u0442\u0430\u0445\u043e\u0432 \u0418\u043b\u044c\u044f",
                    "id": 3410,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0412\u0438\u043a\u0443\u043b\u043e\u0432 \u0418\u0432\u0430\u043d",
                    "id": 3411,
                    "numberPhone": "89653221491"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0414\u043e\u0440\u043e\u0448\u0435\u043d\u043a\u043e \u0418\u0432\u0430\u043d",
                    "id": 3412,
                    "numberPhone": "89683258041"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0415\u0444\u0438\u043c\u0435\u043d\u043a\u043e \u0422\u0438\u043c\u043e\u0444\u0435\u0439",
                    "id": 3413,
                    "numberPhone": "89690219709"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0418\u0441\u043b\u0430\u043c\u043e\u0432 \u041d\u0438\u043a\u0438\u0442\u0430",
                    "id": 3414,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0418\u0441\u043c\u0430\u0438\u043b\u043e\u0432 \u0422\u0438\u043c\u0443\u0440",
                    "id": 3415,
                    "numberPhone": "89091507987"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u0430\u0437\u0430\u0440\u044f\u043d \u042d\u0434\u0433\u0430\u0440",
                    "id": 3416,
                    "numberPhone": "89670507337"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043d\u044f\u0437\u0435\u0432 \u0421\u0435\u0440\u0433\u0435\u0439",
                    "id": 3417,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041a\u043e\u0448\u0435\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d",
                    "id": 3418,
                    "numberPhone": "89175002007"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0435\u0448\u0430\u043b\u043a\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439",
                    "id": 3419,
                    "numberPhone": "89264067607"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u0443\u0445\u043e\u0440\u0442\u043e\u0432 \u0414\u0435\u043d\u0438\u0441",
                    "id": 3420,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u041c\u044b\u0441\u044f\u043a\u0438\u043d\u0430 \u042f\u043d\u0430",
                    "id": 3421,
                    "numberPhone": "89162190736"
                },
                {
                    "birthDate": null,
                    "fullName": "\u041f\u043b\u0430\u0442\u043e\u043d\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b",
                    "id": 3422,
                    "numberPhone": ""
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u044b\u0431\u043a\u0438\u043d \u0424\u0451\u0434\u043e\u0440",
                    "id": 3423,
                    "numberPhone": "89853616577"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0420\u044f\u0431\u0438\u043d\u0438\u043d \u041c\u0430\u043a\u0441\u0438\u043c",
                    "id": 3424,
                    "numberPhone": "89776485300"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0432\u0438\u0440\u0438\u0434\u043e\u0432\u0430 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430",
                    "id": 3425,
                    "numberPhone": "89164743675"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u0435\u0440\u043e\u0443\u0441 \u041c\u0430\u043a\u0430\u0440",
                    "id": 3426,
                    "numberPhone": "89250530723"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043c\u0438\u0440\u043d\u043e\u0432 \u0415\u0433\u043e\u0440",
                    "id": 3427,
                    "numberPhone": "89153237462"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0421\u043e\u043b\u043e\u0432\u044c\u0435\u0432 \u0413\u0435\u043e\u0440\u0433\u0438\u0439",
                    "id": 3428,
                    "numberPhone": "89272730311"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0435\u0440-\u0421\u0442\u0435\u043f\u0430\u043d\u043e\u0432 \u0413\u0435\u043e\u0440\u0433\u0438\u0439",
                    "id": 3429,
                    "numberPhone": "89166767026"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0422\u0438\u0440\u043c\u044f\u0435\u0432 \u041f\u0430\u0432\u0435\u043b",
                    "id": 3430,
                    "numberPhone": "89663135672"
                },
                {
                    "birthDate": null,
                    "fullName": "\u0428\u0430\u043d\u044c\u0433\u0438\u043d \u0410\u043b\u0435\u043a\u0441\u0435\u0439",
                    "id": 3431,
                    "numberPhone": "89856665429"
                }
            ]
        }
    ]
    const [childrenData, setChildrenData] = useState([]);
    const [name, setName] = useState('')
    
    const handleChildSave = (childData) => {
        setChildrenData(prevData => {
            const existingIndex = prevData.findIndex(item => item.name === childData.name);
            if (existingIndex !== -1) {
                const updatedData = [...prevData];
                updatedData[existingIndex] = childData;
                return updatedData;
            } else {
                return [...prevData, childData];
            }
        });
    };
    useEffect(()=>{
      if (classes.includes(name)){
        setClassName(name)
      }
      else{
        setClassName('')
      }
    },[name])
    const saveAll = () => {
        axios.post('http://91.77.160.177:2504/submit', {className:className, childrenData:childrenData}).then(function (res){
          console.log(res)
          setChildrenData([])


        }).catch(function (error){
          console.log(error)
        });
        console.log('Сохраненные данные:', childrenData);

    };

    return (
        !loading&&<>
            <label>Класс:</label>
            <select className='styled-select' value={className} onChange={(e) => setClassName(e.target.value)}>
                <option value="" disabled>Выберите класс: </option>
                {classes.map(cl => <option key={cl} value={cl}>{cl}</option>)}
            </select>            <ul>
                {data.filter(item => item.className === className)
                    .flatMap(item => item.students.map(student => (
                        <DataChildren key={student.id} name={student.fullName} id={student.id} onSave={handleChildSave} loadData={loadData}/>
                    )))}
            </ul>
            {/* <button onClick={saveAll}>Сохранить все</button> */}
        </>
    );
}

export default App;