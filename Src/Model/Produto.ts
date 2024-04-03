export abstract class Produto {
  
    private _id: number;
    private _nome:  string;
    private _tipo: string;
    private _preco: number;


	constructor(id: number, nome:  string, tipo: string, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return { string}
     */
	public get nome():  string {
		return this._nome;
	}

    /**
     * Getter tipo
     * @return {string}
     */
	public get tipo(): string {
		return this._tipo;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param { string} value
     */
	public set nome(value:  string) {
		this._nome = value;
	}

    /**
     * Setter tipo
     * @param {string} value
     */
	public set tipo(value: string) {
		this._tipo = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}

    public visualizar(): void {

    console.log("*****************************************");
    console.log(" Dados do Produto:                       ");
    console.log("*****************************************");
    console.log(` ID do Produto: ${this._id}`              );
    console.log(` Nome do Produto: ${this._nome}`          );
    console.log(` Tipo do Produto: ${this._tipo}`          );
    console.log(` Preco do Produto: ${this._preco}`        );
    console.log("*****************************************");
    }
}