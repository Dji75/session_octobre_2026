import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { form, FormField, validate } from '@angular/forms/signals';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

interface FieldConfig {
  name: string;
  validators: ValidatorFn[];
}

const config: FieldConfig[] = [
  { name: 'username', validators: [Validators.required] },
  { name: 'age', validators: [Validators.min(18)] },
];

@Component({
  imports: [
    JsonPipe,
    FormField
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export default class Home {
  readonly config = config;

  // Génération automatique du modèle Signal à partir de la config
  readonly model = signal<Record<string, any>>(
    Object.fromEntries(this.config.map((field) => [field.name, '']))
  );

  // Génération automatique du Signal Form et branchement des validateurs de la config
  readonly dynamicForm = form(this.model, (schemaPath) => {
    for (const field of this.config) {
      for (const validator of field.validators) {
        validate(schemaPath[field.name], ({ value }) => {
          const errors = validator({ value: value() } as AbstractControl);
          if (!errors) {
            return null;
          }
          return Object.entries(errors).map(([kind, context]) => ({
            kind,
            message: `Invalide (${kind})`,
          }));
        });
      }
    }
  });
}
