import { Produto } from "./Produto";

export class Eletronico extends Produto {

private _celular: string;

	constructor(id: number, nome:  string, tipo: string, preco: number, celular: string) {
		super(id, nome, tipo, preco)
        this._celular = celular;
	}

    /**
     * Getter celular
     * @return {string}
     */
	public get celular(): string {
		return this._celular;
	}

    /**
     * Setter celular
     * @param {string} value
     */
	public set celular(value: string) {
		this._celular = value;
	}

}