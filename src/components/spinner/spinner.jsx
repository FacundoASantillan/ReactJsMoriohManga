import Spinner from 'react-bootstrap/Spinner';


function BasicExample() {
return (
    <Spinner animation="border" role="status">
        <div className='spinner-bt'>
            <span className="visually-hidden">Loading...</span>
        </div>
    </Spinner>
);
}

export default BasicExample;