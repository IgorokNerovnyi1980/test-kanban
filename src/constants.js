export const testData = {
    tasks: [
        {id: 't-0', row: "0", seq_num: 0, text: "string1" },
        {id: 't-1', row: "3", seq_num: 0, text: "string2" },
        {id: 't-2', row: "2", seq_num: 0, text: "string3" },
        {id: 't-3', row: "1", seq_num: 0, text: "string4" },
        {id: 't-4', row: "0", seq_num: 0, text: "string5" },
        {id: 't-5', row: "3", seq_num: 0, text: "string6" },
        {id: 't-6', row: "2", seq_num: 0, text: "string7" },
        {id: 't-7', row: "1", seq_num: 0, text: "string8" },
        {id: 't-8', row: "0", seq_num: 0, text: "string9" },
        {id: 't-9', row: "3", seq_num: 0, text: "string10" },
    ],

    columns:{
        row_0:{title:'ON-HOLD', bg: '#fb7e46', id:'row_0',taskIds:['t-2','t-3'] },
        row_1:{title:'IN-PROGRESS', bg: '#2a92bf', id:'row_1', taskIds:['t-1']},
        row_2:{title:'NEEDS-REVIEW', bg: '#f4ce46', id:'row_2', taskIds:['t-5','t-6', 't-7','t-8']},
        row_3:{title:'APPROVED', bg: '#00b961', id:'row_3', taskIds:[]}
    }
    ,
    render:[ 'row_0', 'row_1', 'row_2', 'row_3' ],

};
