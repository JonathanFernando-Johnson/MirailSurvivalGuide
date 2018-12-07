import React, { Component } from "react";
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

class Register extends Component {
    render() {
        return (
            <div className="create_account_screen">

                <div className="create_account_form">
                    <h1>Inscription</h1>
                    <p>Vous êtes à la faculté Jean Jaurès et vous ne trouvez plus le moyen
                        de sortir la tete de l'eau ?
                        Vous souhaitez survivre au mirail ?!
                        Plus d'inquiétude, nous sommes là !</p>

                    <form action="" className="docs-TextFieldExample">

                        {/* Label et Input pour les infos de base de l'utilisateur */}
                        <Label htmlFor="lastName">Nom :</Label>
                        <TextField id="lastName" required={true} placeholder="Dubon" />

                        <Label htmlFor="firstName">Prénom :</Label>
                        <TextField id="firstName" required={true} placeholder="John" />

                        <Label htmlFor="pseudo">Pseudo :</Label>
                        <TextField id="pseudo" required={true} placeholder="john.dubon" />

                        <Label htmlFor="password">Mot de passe :</Label>
                        <TextField id="password" required={true} placeholder="********" />


                        {/* Checkbox pour les infos sur les transports de l'utilisateur */}
                        <p>Transport, indiquer les transports que vous utilisez le plus</p>

                        <Checkbox label="Je viens en métro" onChange={this._onCheckboxChange} />

                        <Checkbox label="Je viens en vélo" onChange={this._onCheckboxChange} />

                        <Checkbox label="Je viens en voiture" onChange={this._onCheckboxChange} />


                        {/* Checkbox pour les infos sur les repas de l'utilisateur */}
                        <p>Repas, indiquer les repas que vous réalisez le plus</p>

                        <Checkbox label="Je mange au restaurant universitaire" onChange={this._onCheckboxChange} />

                        <Checkbox label="Je mange à la maison" onChange={this._onCheckboxChange} />

                        <Checkbox label="Je prépare ma nourriture" onChange={this._onCheckboxChange} />

                        <Checkbox label="Je mange au restaurant ou au fast food" onChange={this._onCheckboxChange} />

                        <PrimaryButton type="submit">Sauvez-moi !</PrimaryButton>
                    </form>

                </div>

            </div>
        );
    }
}

export default Register;
