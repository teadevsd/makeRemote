import './Blog.css'

const Blog =(props) =>{
    const {title, author, content, date} = props;

    const formatdate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="blogpost">
            <h2>{title}</h2>
            <p>By {author} on {formatdate}</p>
            <p>{content}</p>

        </div>
    )
}

export default Blog