import '../style.css'
import{BrowserRouter as Router,
  Routes,
  Link,
  Route}from 'react-router-dom'
 export default function Header(){
    return(
      <div class="Header">
        <h3>flipkart</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">login</Link></li>
          <li><Link to="/">register</Link></li>
        </ul>
      </div>
    )
  }
  
  
