import styled from "styled-components";

const NavWrapper = styled.header`
    &{
        width: 300px;
        margin: 0;
        position: sticky;
        top: 0;
        height: 100vh;
        transition: 1000ms;
        flex-shrink: 0;
        overflow: hidden;
        &.dark{
            background-color: blueviolet;
            h1{
                color: white;
            }
                a{
                    color: white !important;
                }
        }
        &.open{
           width: 0;    
        }
        h1{
            color: blueviolet;
        }
        .btun{
            height: 50px;
            border: blueviolet 2px solid;
            border-radius: 10px;
            .icon{
                color: blueviolet;
            }
        }
    }
    li{
        list-style-type: none ;
        margin: 20px;
        font-size: 20px;
        a{
            text-decoration: none;
            color: blueviolet;
            font-weight: bold;
        }
    }
`;

export default NavWrapper;