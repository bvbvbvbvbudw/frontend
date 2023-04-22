// Якийсь програміст написав код, що виводить суму елементів масиву:
import React,{useState} from "react";

function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += +elem;
	}
	
	return res;
}

export default function Calculator() {
	const [value, setValue] = useState('');
	const [nums, setNums] = useState([1, 2, 3]);
	const [sum, setSum] = useState(6); 
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	function handleBlur(event) {
		setNums(nums.concat(+event.target.value)); 
		setSum(getSum(nums.concat(+event.target.value))); 
	}
	
	return (<div>
		<p>{sum}</p>
		<input value={value} onChange={handleChange} onBlur={handleBlur} />
	</div>);
}


// Що не так із цим кодом? Виправте його.

// Якийсь програміст написав код для редагування елементів масиву:

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
	const [value, setValue] = useState('');
	
	const result = notes.map((note, index) => {
		return <p key={index} onClick={() => startEdit(index)}>
			{note}
		</p>;
	});
	
	function startEdit(index) {
		setEditNum(index);
		setValue(notes[index]); 
	}
	
	function changeItem(event) {
		setValue(event.target.value);
		setNotes([...notes.slice(0, editNum), event.target.value,...notes.slice(editNum + 1)]);
	}
	
	return <div>
		{result}
		<input value={value} onChange={changeItem} />
	</div>;
}

// Що не так із цим кодом? Виправте його.


// Для всіх

// Одне джерело істини
// Для будь-яких змінюваних даних у програмі React має бути одне джерело істини . 
//Під цими словами мається на увазі те, що якщо у вас є два стейти і один стейт може бути
// обчислений через інший - значить один із стейтів зайвий і його потрібно прибрати.

// Давайте обговоримо це з прикладу. Нехай у вас, наприклад, 
//є два інпути: у перший вводиться температура у градусах Фаренгейта, а у другий – у градусах Цельсія. При цьому ми хочемо, щоб обидва інпути були синхронізовані: при введенні
// температури в один інпут вона відповідним чином має змінюватись у другому.

// Неправильним підходом буде ввести два стейти: один для температури за Фаренгейтом,
// а другий - за Цельсієм. Чому неправильно: тому що одна температура обчислюється з іншої,
// а значить місцем зберігання даних повинен бути один стейт.