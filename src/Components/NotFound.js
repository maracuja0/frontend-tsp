import React from 'react';
import logo from '../logo.svg';
import { Button} from "react-bootstrap";


const NotFound = () =>{
  return(<div className='mt-4'>

        <header className="NotFound-header">
                <img src={logo} className="NotFound-logo" alt="logo" width={300} height={300} />
    
        <h2>404 page not found</h2>
        <p>Страница, которую вы искали, не существует. :/</p>
        <p> Не волнуйтесь, скорее всего вы ввели неправильный адресс страницы </p>
        <p> Можете вернуться на главную и начать все сначала!</p>

        <Button variant="primary" href="http://localhost:3000" className='mb-4'>
            Вернуться на главную
        </Button>

        </header>
  </div>)
}
export default NotFound;