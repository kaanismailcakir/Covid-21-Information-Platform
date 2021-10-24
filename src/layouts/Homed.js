import React from 'react'
import { Menu,Input,Dropdown} from 'semantic-ui-react'
export default function Homed() {
    return (
        <div>
            <Menu color="grey" inverted >
          <Menu.Menu className=""  >
            <Menu.Item className="home" >
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Dropdown item text='Language' pointing="top right" >
            <Dropdown.Menu>
              <Dropdown.Item><img cir src="https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_Turkey.png"  />Türkçe  </Dropdown.Item>
              <Dropdown.Item><img className="App-amerika" src="https://media.istockphoto.com/vectors/flat-united-states-of-america-flag-vector-vector-id546203332" />İngilizce</Dropdown.Item>
              <Dropdown.Item><img src="https://www.bayraklar.info/data/flags/ultra/ru.png" />Rusça</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
       </Menu.Menu>
          </Menu>
          
        </div>
    )
}
