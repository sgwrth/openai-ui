import { Componentt } from '@angular/core';
import { OpenaiService } from '../openai.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-openai',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './openai.component.html',
  styleUrl: './openai.component.css'
})
export class OpenaiComponent {

  inputForm = this.formBuilder.group({
    question: 'What\'s up, doc?'
  });

  answer = {
    generation: ''
  }

  constructor(
    private openaiService: OpenaiService,
    private formBuilder: FormBuilder
  ) {}

  getOpenAiResponse(message: string | null | undefined): any {
    this.openaiService.getOpenAiResponse(message)
      .subscribe(res => {
        this.answer = res;
      });
  }

  onSubmit(): void {
    this.answer.generation = 'Please wait ...';
    this.getOpenAiResponse(this.inputForm.controls.question.value);
  }
}
