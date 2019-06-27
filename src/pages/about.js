import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

const style = {textAlign:"center", fontFamily:"Verdana, sans-serif"};
const bold = {fontWeight:"bold"};

const About = () => (
    <Layout>
        <h1 style={style}>Hi, my name is Michael Ganzorig.</h1>
        <p style={style}>I am an <span style={bold}>Electrical Engineering and Computer Science</span> student at UC Berkeley.</p>
        <p style={style}>I love to <span style={bold}>build</span> software and <span style={bold}>learn</span> about technology.</p>
        <p style={style}>I believe the best way to learn is to teach someone.
        So, I <Link to="/blog">write</Link> about what I'm learning and share what I'm <Link to="/projects" target="_blank">building</Link> here.</p>
        <p style={style}>Besides coding, my other hobbies are reading books and playing basketball.</p>
        <div style={style}>
            <IconButton color="primary" href="https://github.com/manlaig" target="_blank">            
                <SvgIcon>
                    <path fill="#000000" d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
                </SvgIcon>
            </IconButton>
            <IconButton color="primary" href="https://linkedin.com/in/enkhmanlai/" target="_blank">
                <SvgIcon>
                <svg style={{width:40, height:40}} viewBox="2 2 20 20">
                    <path fill="#000000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
                </SvgIcon>
            </IconButton>
        </div>
    </Layout>
)

export default About