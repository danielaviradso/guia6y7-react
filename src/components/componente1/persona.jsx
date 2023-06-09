import React from 'react'
import { people } from '../../database/data'
import { getImageUrl } from '../../Help/utils';

export default function ListPersona() {
    let filtro ="Desarrollador"
    const desarrollador = people.filter(person=>
        person.profession=filtro
        );
    const listItems = desarrollador.map(person =>
        <li key = {person.id}>
            <img src={getImageUrl(person)} 
            alt={person.name} />
            <p>
                <b>
                    {person.name}:
                </b>
                {' ' + person.profession +' '
                }
                know for {person.accomplishment}
                
            </p>
        </li>
        )
        return <ul>{listItems}</ul>
}

