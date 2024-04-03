import { Produto } from "./Produto";

export class Eletronico extends Produto {

private _marca: string;

	constructor(id: number, nome:  string, tipo: string, preco: number, marca: string) {
		super(id, nome, tipo, preco)
        this._marca = marca;
	}

    /**
     * Getter marca
     * @return {string}
     */
	public get marca(): string {
		return this._marca;
	}

    /**
     * Setter marca
     * @param {string} value
     */
	public set marca(value: string) {
		this._marca = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Marca ${this._marca}`)
    }

}