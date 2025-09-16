import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: url("https://images.unsplash.com/photo-1587092499616-b0e4d7809b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
background-repeat: no-repeat;
background-size: cover;
position: absolute;
width: 100%;


@media (max-width: 600px) {
	// padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
margin-top:20px;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: orange;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
