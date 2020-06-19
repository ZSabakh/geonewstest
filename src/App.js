import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Article from './components/Article/Article';
import ArticleList from './components/ArticleList/ArticleList';
import './App.css';



function App() {
  return (
    <Router>
      <div className="Navigation">
        <Link to="/" className="Logo">მთავარი</Link>
      </div>
      <Switch>
        <Route path="/" exact component={ArticleList} />
        <Route path="/news/:rec_id" component={Article} />
      </Switch>
    </Router >
  );
}

export default App;
