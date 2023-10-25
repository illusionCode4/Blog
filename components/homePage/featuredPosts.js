import PostsGrid from '../posts/postsGrid';
import classes from './featuredPosts.module.css';

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts}/>
    </section>
  );
}
export default FeaturedPosts;
