import { css } from "@emotion/core";

export const add = () =>
  css`
    padding: 16px;
  `;

export const addForm = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const addInput = () =>
  css`
    background: unset;
    border: unset;
    padding: 0 64px;

    flex: 1;

    border-bottom: 1px solid var(--main-red-color);
    outline: unset;

    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
  `;

export const addBtn = () =>
  css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;

    padding: 16px;
    padding-right: unset;
    cursor: pointer;

    background: unset;
    border: unset;
    outline: unset;

    &:active {
      text-shadow: 1px 1px 2px var(--main-black-color);
    }
  `;
