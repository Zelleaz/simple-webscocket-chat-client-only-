interface StorageItem {
    key: string
    value: string
}

class LocalstorageHelper {
    public set(item: StorageItem) {
        localStorage.setItem(item.key, item.value)
    }

    public setMany(items: StorageItem[]) {
        items.forEach(item => {
            this.set(item)
        })
    }

    public get(key: string) {
        return localStorage.getItem(key)
    }

    public getMany(keys: string[]): string[] {
        const results: string[] = []

        keys.forEach(key => {
            const item = this.get(key)

            if (item) {
                results.push(item)
            }
        })

        return results
    }
}

export default new LocalstorageHelper()