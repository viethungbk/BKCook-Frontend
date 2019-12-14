import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button
} from "shards-react";
import axios from 'axios';
import PageTitle from "../../components/common/PageTitle";
import BlogItem from "../../components/blog/BlogItem";
import BlogList from "../../components/blog/BlogList";
import callApi from "./../../utils/apiCaller";

class ListBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    }
    componentDidMount() {
        callApi('blogs', 'GET', null).then(res => {
            console.log(res.data)
            this.setState({
                blogs: res.data.data.blogs
            });
        });

    }
    render() {
        var { blogs } = this.state;
        return (
            <BlogList>
                {this.showBlogs(blogs)}
            </BlogList>
        );
    }
    showBlogs(blogs) {
        var result = null;
        if (blogs.length > 0) {
            result = blogs.map((blog, index) => {
                return (
                    <BlogItem
                        key={index}
                        blog={blog}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
}

export default ListBlog;
