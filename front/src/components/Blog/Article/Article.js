import React, {Component} from 'react';
import {parseUrl} from '../../Utils/UrlHandlers/UrlHandlers';
import MoreBlogSidebar from './MoreBlogSidebar/MoreBlogSidebar';
import './Article.scss';

class Article extends Component{
  constructor(props){
    super(props);
    this.state={
      blog: this.blogExists(),
      blogsTest: 'on'
    }
    this.toggleBlogsTest = this.toggleBlogsTest.bind(this)
  }

  blogExists(){
    console.log(this.props)
    const blogExists = this.props.blogs.filter(blog=>{
      return blog.title.toLowerCase() === parseUrl(this.props.match.params.blogId)
    })[0]
    if(blogExists){
      return blogExists
    }else{
      this.props.history.goBack();
    }
  }

  componentDidMount(){
  }

  toggleBlogsTest(){
    this.setState({
      blogsTest: this.state.blogsTest == 'on' ? 'off' : 'on'
    })
  }

  render(){
    console.log(this.props.history)
    return (
      <div id="article">
      { this.state.blog ?
        <>
        <div>
          <div className="title-bar">
            <h4 onClick={this.toggleBlogsTest}>{this.state.blog.title}</h4>
            <p>By: {this.state.blog.author}</p>
          </div>
            <div>
              <div className="img-wrapper">
                <img  alt={this.state.blog.title} src={this.state.blog.src} />
              </div>
              <div className="article-body">
                <p>
                  Lorem ipsum dolor amet godard artisan shoreditch kinfolk cliche
                  gluten-free ethical blog whatever hexagon williamsburg squid organic
                  glossier. Art party meditation marfa post-ironic, air plant forage
                  direct trade neutra actually pitchfork man braid drinking vinegar raclette
                  8-bit wolf. Hella schlitz authentic messenger bag master cleanse asymmetrical.
                  Semiotics whatever blog yuccie 8-bit wolf lo-fi gluten-free, seitan pour-over lyft.
                  Kombucha shoreditch succulents, tilde roof party forage plaid. Banjo 90's health
                  goth chambray, freegan hell of raclette small batch hot chicken deep v man braid.
                </p>
                <p>
                  Intelligentsia helvetica lo-fi ramps, master cleanse plaid brooklyn vaporware waistcoat.
                  Helvetica retro subway tile, vape narwhal cornhole migas pickled cloud bread organic chartreuse
                  taiyaki occupy bitters affogato. Knausgaard street art hexagon whatever four loko pitchfork hell
                  of farm-to-table bespoke copper mug beard wolf. Whatever bicycle rights woke YOLO readymade
                  raw denim art party, tofu humblebrag palo santo cloud bread. Tumblr skateboard pok pok subway
                  tile tilde edison bulb, flannel gentrify chambray small batch.
                </p>
                <p>
                  Seitan cliche four dollar toast, scenester butcher mumblecore heirloom before they sold out.
                  Truffaut pok pok fanny pack pinterest church-key salvia four dollar toast pork belly taxidermy
                  tumeric glossier. Authentic meggings man bun paleo. Raw denim pour-over portland iceland, squid
                  crucifix godard. Biodiesel sartorial knausgaard, pickled keffiyeh waistcoat craft beer humblebrag
                  kitsch cardigan everyday carry iceland plaid vinyl. Palo santo vegan occupy sartorial,
                  gluten-free tattooed vape etsy thundercats selfies migas. Tousled asymmetrical kinfolk squid
                  fam vice small batch vinyl roof party.
                </p>
              </div>
            </div>
        </div>
        <MoreBlogSidebar selectedBlog={this.state.blog} blogs={this.props.blogs}/>
        </>
      : <>Loading</>}
      </div>

    );
  }

}

export default Article;
