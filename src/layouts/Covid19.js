import React from 'react'
import { Dropdown,Menu } from 'semantic-ui-react'
export default function Covid19() {
    return (
        <div>
           <div >
           <Menu color="grey" inverted>
          <Menu.Menu className=""  >
            <Dropdown item text='Covid 19' pointing="top right" >
            <Dropdown.Menu>
              <Dropdown.Item><button>Türkçe</button></Dropdown.Item>
              <Dropdown.Item><img className="App-amerika" src="https://media.istockphoto.com/vectors/flat-united-states-of-america-flag-vector-vector-id546203332" />İngilizce</Dropdown.Item>
              <Dropdown.Item><img src="https://www.bayraklar.info/data/flags/ultra/ru.png" />Rusça</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
       </Menu.Menu>
          </Menu>
           </div>
        </div>
    )
}
