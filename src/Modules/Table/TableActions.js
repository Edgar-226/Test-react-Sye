import { getCharacters, getEpisode, getLocation } from "../../App/TableCrud";
import { setCharacters, setEpisode, setLocation } from "../../App/Appslice";

export const actions = [
    {
        path: "/",
        getdata: getCharacters,
        slice: setCharacters,
        columns: [
            { dataField: 'id', text: 'ID' },
            { dataField: 'name', text: 'Name' },
            { dataField: 'status', text: 'Status' }
        ]
    },
    {
        path: "/location",
        getdata: getLocation,
        slice: setLocation,
        columns: [
            { dataField: 'id', text: 'ID' },
            { dataField: 'name', text: 'Name' },
            { dataField: 'type', text: 'Type' },
            { dataField: "dimension", text: "Dimension" }
        ]
    },
    {
        path: "/episode",
        getdata: getEpisode,
        slice: setEpisode,
        columns: [
            { dataField: 'id', text: 'ID' },
            { dataField: 'name', text: 'Name' },
            { dataField: 'air_date', text: 'Air Date' },
            { dataField: "episode", text: "Episode" }
        ]
    }
];
