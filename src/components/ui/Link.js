import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function LinkItem({ text, type, href }) {
  return (
    <Link href={href} passHref>
      <StyledLink className={type}>{text}</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  padding: 6px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 36px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: 0.25s ease-in-out;

  :hover {
    color: hsla(185, 56%, 30%, 1);
    transition: 0.25s ease-in-out;
  }

  &.button {
    border: 1px solid hsla(0, 0%, 55%, 1);
    padding: 6px 16px;
    border-radius: 4px;
    color: hsla(0, 0%, 30%, 1);
    :hover {
      color: hsla(0, 0%, 20%, 1);
      transition: 0.25s ease-in-out;
    }
  }
`;
