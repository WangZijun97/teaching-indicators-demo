import React from 'react'
import './App.css'

export const DEFAULTCOLOR = "#282c34"

export function falselistgen(n) {
	return defaultconfiggen(n, false)
}

export function colorlistgen() {
	let l = ["saddlebrown", "green", "blue", "rebeccapurple"]
	let n = [5,5,4,4]
	let ls = []
	let i, j
	for (i = 0; i < n.length; i++) {
		for (j = 0; j < n[i]; j++) {
			ls.push(l[i])
		}
	}
	return ls
}

export function defaultconfiggen(n, val) {
	let ls = new Array(n)
	ls.fill(val)
	return ls
}

export function cbcombine(ls1, ls2) {
	return combine(ls1, ls2, [0,6,12,17])
}

export function combine(ls1, ls2, pos) {
	let ls = ls2.slice()
	
	let i
	for (i = 0; i < ls1.length; i++) {
		ls.splice(pos[i],0,ls1[i])
	}

	return ls
}


export function cbdefconfiggen() {
	return cbcombine(defaultconfiggen(4,"none"), defaultconfiggen(17, DEFAULTCOLOR))
}

export function test() {
	let ls = [1,2,3]
	//ls = cloneDeep(ls)
	ls.splice(0,0,"lol")
	return ls
}

export function cbconfigvalsgen() {
	return cbcombine(defaultconfiggen(4, "block"), colorlistgen())
}
