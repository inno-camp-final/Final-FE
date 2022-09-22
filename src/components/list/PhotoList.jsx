import { PlusCircleFilled } from "@ant-design/icons";
import styled from "styled-components";

const PhotoList = () => {
    return (
        <Container>
            <div>
                <PlusCircleFilled style={{ color: "#eeeeee" }} />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    );
};
export default PhotoList;

const Container = styled.div`
    width: 100%;
    gap: 5px;
    display: flex;
    flex-wrap: wrap;

    & > div {
        width: 113px;
        height: 113px;
        border: 0.5px solid #eeeeee;
    }
    & > div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
`;