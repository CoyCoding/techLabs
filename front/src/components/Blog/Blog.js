import React, {Component} from 'react';
import BlogGrid from './BlogGrid/BlogGrid';
import BlogSidebar from './BlogGrid/BlogSidebar';
import Article from './Article/Article';
import {parseUrl} from '../Utils/UrlHandlers/UrlHandlers';
import Jumbo from '../Utils/Layouts/Jumbo';
import './Blog.scss';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      categories: ['data engineering','agile','news','resource','culture','case study'],
      currentCategory: parseUrl(this.props.match.params.category),
      selectedBlog: this.props.match.params.blogId
    }
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState.selectedBlog, nextProps.match.params)
    if(nextProps.match.params.blogId){
      return ({
        selectedBlog: nextProps.match.params.blogId,
        currentCategory: parseUrl(nextProps.match.params.category)
      });
    }
    console.log(prevState.currentCategory, nextProps.match.params.category)
    if(prevState.currentCategory !== nextProps.match.params.category){
      return ({
        currentCategory: parseUrl(nextProps.match.params.category),
        selectedBlog: undefined
      });
    }
    return null;
  }

  isPost(){
    return this.props.match.params.blogId ? 'post' : '';
  }

  render(props){
    const hero = {
      title:'Blog',
    }
    console.log(this.props.match.params.blogId)
    return (
      <div id="root-link">
      <Jumbo className={this.isPost() ? 'post': ''} title={hero.title}/>
        <div className="service-body blog-wrapper">
          <section className="blog">
            <div>
              <div className="blog-grid">
                {
                  this.state.selectedBlog ?
                  <Article {...this.props} {...this.state}/>
                  :
                  <BlogGrid currentCategory={this.state.currentCategory} elements={this.props.blogs}/>
                }
              </div>
              <div className="sidebar">
                <BlogSidebar {...this.props} {...this.state}/>
              </div>
            </div>
          </section>
        </div>
      </div>

    );
  }

}

export default Blog;
