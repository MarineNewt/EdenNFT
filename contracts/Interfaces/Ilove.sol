// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

interface LoveToken {
    function balanceOf(address owner) external view returns (uint256 balance);
}